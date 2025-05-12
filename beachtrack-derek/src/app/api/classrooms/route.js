import { NextResponse } from "next/server";
import { ConnectDB } from "../../../../lib/config/db";
import mongoose from "mongoose";

export async function GET(request) {
  try {
    await ConnectDB(); // Ensure DB connection

    const { searchParams } = new URL(request.url);
    const buildingName = searchParams.get("building");

    if (!buildingName) {
      return NextResponse.json({ error: "Building name is required" }, { status: 400 });
    }

    const db = mongoose.connection.db;
    const collection = db.collection("classrooms");

    // Query for classrooms in the selected building
    const classrooms = await collection.find({ building: buildingName }).toArray();

    return NextResponse.json(classrooms, { status: 200 });

  } catch (error) {
    console.error("Error fetching classrooms:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
