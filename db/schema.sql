-- Human-entered data layer for the prospect dashboard (ADDITIVE).
-- Never touched by data/items.js or the 2am routine. Rows are keyed to a
-- prospect's id (matches the id field in data/items.js). jsonb payload keeps
-- it schema-flexible so new fields never require a migration.
-- Safe to re-run: everything is IF NOT EXISTS.

CREATE TABLE IF NOT EXISTS store_notes (
  id          SERIAL PRIMARY KEY,
  prospect_id TEXT        NOT NULL,
  kind        TEXT        NOT NULL,
  payload     JSONB       NOT NULL DEFAULT '{}'::jsonb,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at  TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_store_notes_prospect_id ON store_notes (prospect_id);
CREATE INDEX IF NOT EXISTS idx_store_notes_kind        ON store_notes (kind);
