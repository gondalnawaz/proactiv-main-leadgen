import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';

const customerInsertQuery = `INSERT INTO Customer (Id, FullName, Email, ContactNumber, BusinessName, Industry, Website, PostalAddress, CreateDateUTC) values (@id, @fullName, @email, @contactNumber, @businessName, @industry, @website, @postal, @createDate)`;

const orderInsertQuery = `INSERT INTO [Order] (Id, Title, Days, ExpireDateUTC, Valued, CreateDateUTC, CustomerId, Funnel) values (@id, @description, @days, @date, @valued, @createDate, @customerId, @funnel)`;

const customerSelectIdByEmailOrNumber = 'SELECT Id FROM Customer WHERE Email = @email OR ContactNumber = @contactNumber'

export async function POST(req: Request) {
  const sql = require('mssql');

  try {

    const { customer, software } = await req.json();
    await sql.connect(process.env.NEXT_PUBLIC_DB_CONNECTION);
    try {

      let customerId = await getUserAsync(customer.email, customer.number);
      if (!customerId)
        customerId = await insertUserAsync(customer);
      const orderId = await insertOrderAsync(customerId, software);

      return NextResponse.json(
        { customerId, orderId },
        { status: 200 }
      );
    } catch (error) {
      console.log(error);
    }
    await sql.close();

  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ error: 'Internal Error' }, { status: 500 });

  async function getUserAsync(email: string, contactNumber: string) {
    const request = new sql.Request();
    request.input('email', sql.VarChar, email);
    request.input('contactNumber', sql.VarChar, contactNumber);
    const result = await request.query(customerSelectIdByEmailOrNumber);
    return result.recordset.length > 0 ? result.recordset[0].Id : undefined;
  }

  async function insertUserAsync(customer: any) {
    const {
      fullname, businessname, email, number, industry, web, address
    } = customer;
    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('fullName', sql.NVarChar, fullname);
    request.input('businessName', sql.NVarChar, businessname);
    request.input('email', sql.VarChar, email.toLowerCase());
    request.input('contactNumber', sql.VarChar, number.toLowerCase());
    request.input('industry', sql.NVarChar, industry);
    request.input('website', sql.VarChar, web);
    request.input('postal', sql.NVarChar, address);
    request.input('createDate', sql.DateTime2, new Date(new Date().toUTCString()));
    await request.query(customerInsertQuery)
    return id;
  }

  async function insertOrderAsync(customerId: any, software: any) {
    const {
      description, days, valued, dateUtc
    } = software;

    const request = new sql.Request();
    const id = uuidv4();
    request.input('id', sql.UniqueIdentifier, id);
    request.input('customerId', sql.UniqueIdentifier, customerId);
    request.input('description', sql.NVarChar, description);
    request.input('days', sql.Int, days);
    request.input('valued', sql.Decimal(18, 2), valued);
    request.input('date', sql.DateTime2, new Date(dateUtc));
    request.input('funnel', sql.TinyInt, 3);
    request.input('createDate', sql.DateTime2, new Date(new Date().toUTCString()));
    await request.query(orderInsertQuery);
    return id;
  }
}
