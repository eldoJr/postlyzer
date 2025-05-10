// Mock data for now
export async function GET() {
    const mockPost = {
      url: "https://instagram.com/p/ABC123",
      likes: 1500,
      comments: 89,
      topComment: {
        text: "This is amazing!",
        likes: 120,
        user: "@fan123",
      },
    };
    return Response.json(mockPost);
  }