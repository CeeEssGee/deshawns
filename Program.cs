using DeshawnsAPI.Models;

var builder = WebApplication.CreateBuilder(args);

List<City> cities = new List<City>()
{
    new City()
    {
        Id = 1,
        Name = "Jacksonville"
    },
    new City()
    {
        Id = 2,
        Name = "St. John's"
    },
    new City()
    {
        Id = 3,
        Name = "Orange Park"
    },
    new City()
    {
        Id = 4,
        Name = "Jacksonville Beach"
    },
    new City()
    {
        Id = 5,
        Name = "Fernandina Beach"
    },
    new City()
    {
        Id = 6,
        Name = "Ponte Vedra Beach"
    },
    new City()
    {
        Id = 7,
        Name = "Middleburg"
    }
};

List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Piper",
        WalkerId = 1,
        CityId = 1
    },
    new Dog()
    {
        Id = 2,
        Name = "Bella",
        WalkerId = 1,
        CityId = 1
    },
    new Dog()
    {
        Id = 3,
        Name = "Yoda",
        WalkerId = 8,
        CityId = 2
    },
    new Dog()
    {
        Id = 4,
        Name = "Elvis",
        WalkerId = 9,
        CityId = 3
    },
    new Dog()
    {
        Id = 5,
        Name = "Dolly",
        CityId = 4
    },
    new Dog()
    {
        Id = 6,
        Name = "Rocket",
        CityId = 7
    },
    new Dog()
    {
        Id = 7,
        Name = "Ebony",
        CityId = 6
    },
    new Dog()
    {
        Id = 8,
        Name = "Scotty",
        CityId = 5
    },
    new Dog()
    {
        Id = 9,
        Name = "Oreo",
        CityId = 3
    },
    new Dog()
    {
        Id = 10,
        Name = "Sassy",
        CityId = 4
    },
    new Dog()
    {
        Id = 11,
        Name = "Mac",
        CityId = 5
    }
};

List<Walker> walkers = new List<Walker>()
{
    new Walker()
    {
        Id = 1,
        Name = "Abigail"
    },
    new Walker()
    {
        Id = 2,
        Name = "Brandy"
    },
    new Walker()
    {
        Id = 3,
        Name = "Carl"
    },
    new Walker()
    {
        Id = 4,
        Name = "Alphonse"
    },
    new Walker()
    {
        Id = 5,
        Name = "Damara"
    },
    new Walker()
    {
        Id = 6,
        Name = "Anna"
    },
    new Walker()
    {
        Id = 7,
        Name = "Elmira"
    },
    new Walker()
    {
        Id = 8,
        Name = "Bernie"
    },
    new Walker()
    {
        Id = 9,
        Name = "Rolando"
    },
    new Walker()
    {
        Id = 10,
        Name = "Tiffanie"
    }
};

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/hello", () =>
{
    return new { Message = "Welcome to DeShawn's Dog Walking" };
});

app.MapGet("/api/home", () =>
{
    return dogs;
});

app.MapGet("/api/cities", () =>
{
    return cities;
});

app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog chosenDog = dogs.FirstOrDefault(d => d.Id == id);

    City chosenDogCity = cities.FirstOrDefault(c => c.Id == chosenDog.CityId);

    // need to add walkers (if any)

    chosenDog.City = chosenDogCity;

    return chosenDog;
});

app.Run();
