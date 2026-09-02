CREATE EXTENSION IF NOT EXISTS "pgcrypto";

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

  title TEXT NOT NULL
    CHECK (char_length(trim(title)) BETWEEN 1 AND 120),

  category TEXT NOT NULL DEFAULT 'none'
    CHECK (category IN ('none', 'work', 'personal', 'health', 'learning')),

  importance TEXT NOT NULL DEFAULT 'low'
    CHECK (importance IN ('low', 'medium', 'high')),

  completed BOOLEAN NOT NULL DEFAULT false,

  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);