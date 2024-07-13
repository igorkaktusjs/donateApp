export const  userProfiles = [
    {
      id: 1,
      firstName: "John",
      lastName: "Doe",
      username: "johndoe123",
      password: "password123",
      avatar: "https://example.com/avatar/johndoe.jpg",
      address: {
        country: "USA",
        city: "New York",
        street: "123 Main St",
        houseNumber: "Apt 101",
      },
      email: "johndoe@example.com",
      phone: "+1 (555) 123-4567",
      verified: true,
      registrationDate: "2022-04-10",
      status: "new",
      rating: 4.8,
      reviews: [
        {
          id: 1,
          userId: 2,
          comment: "Great guest, easy to communicate with.",
          rating: 5,
        },
      ],
      reviewCount: 1,
      wishlist: {
        name: "John's Wishlist",
        created_at: "2023-01-01T12:00:00Z",
        listing_ids: [1, 2, 3, 4],
      },
    },
  ];