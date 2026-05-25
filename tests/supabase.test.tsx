import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://your-supabase-url.supabase.co";
const supabaseKey = "your-supabase-key";
const supabase = createClient(supabaseUrl, supabaseKey);

describe("Supabase Integration", () => {
  it("initializes a new game", async () => {
    const { data, error } = await supabase
      .from("games")
      .insert([{ board: Array(9).fill(null), is_x_next: true }])
      .select();
    expect(error).toBeNull();
    expect(data).toBeTruthy();
  });

  it("updates the game state", async () => {
    const { error } = await supabase
      .from("games")
      .update({ board: ["X", null, null, null, null, null, null, null, null] })
      .eq("id", 1);
    expect(error).toBeNull();
  });
});