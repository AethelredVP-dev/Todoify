import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const result = await db.query(`
      SELECT
        id,
        title,
        category,
        importance,
        completed,
        created_at,
        updated_at
      FROM tasks
      ORDER BY created_at DESC
    `);

    const tasks = result.rows.map((task) => ({
      id: task.id,
      name: task.title,
      category: task.category,
      importance: task.importance,
      completed: task.completed,
      createdAt: task.created_at,
      updatedAt: task.updated_at,
    }));

    return NextResponse.json({
      data: tasks,
    });
  } catch (error) {
    console.error("Could not load tasks:", error);

    return NextResponse.json(
      {
        error: {
          message: "Could not load tasks.",
        },
      },
      { status: 500 },
    );
  }
}
