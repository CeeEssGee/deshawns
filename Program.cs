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
    }
};

List<Dog> dogs = new List<Dog>()
{
    new Dog()
    {
        Id = 1,
        Name = "Piper",
        CityId = 1
    },
    new Dog()
    {
        Id = 2,
        Name = "Bella",
        CityId = 1
    },
    new Dog()
    {
        Id = 3,
        Name = "Yoda",
        CityId = 2
    },
    new Dog()
    {
        Id = 4,
        Name = "Elvis",
        CityId = 3
    },
    new Dog()
    {
        Id = 5,
        Name = "Dolly",
        CityId = 4
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

app.Run();
