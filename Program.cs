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
        Name = "Lucky",
        WalkerId = 3,
        CityId = 5
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

List<WalkerCity> walkerCities = new List<WalkerCity>()
{
    new WalkerCity()
    {
        Id = 1,
        WalkerId = 1,
        CityId = 1
    },
    new WalkerCity()
    {
        Id = 2,
        WalkerId = 8,
        CityId = 2
    },
    new WalkerCity()
    {
        Id = 3,
        WalkerId = 9,
        CityId = 3
    },
    new WalkerCity()
    {
        Id = 4,
        WalkerId = 2,
        CityId = 4
    },
    new WalkerCity()
    {
        Id = 5,
        WalkerId = 3,
        CityId = 5
    },
    new WalkerCity()
    {
        Id = 6,
        WalkerId = 4,
        CityId = 6
    },
    new WalkerCity()
    {
        Id = 7,
        WalkerId = 5,
        CityId = 7
    },
    new WalkerCity()
    {
        Id = 8,
        WalkerId = 6,
        CityId = 1
    },
    new WalkerCity()
    {
        Id = 9,
        WalkerId = 7,
        CityId = 2
    },
    new WalkerCity()
    {
        Id = 10,
        WalkerId = 8,
        CityId = 3
    },
    new WalkerCity()
    {
        Id = 11,
        WalkerId = 9,
        CityId = 4
    },
    new WalkerCity()
    {
        Id = 12,
        WalkerId = 10,
        CityId = 5
    },
    new WalkerCity()
    {
        Id = 13,
        WalkerId = 5,
        CityId = 6
    },
    new WalkerCity()
    {
        Id = 14,
        WalkerId = 6,
        CityId = 7
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

// list of dogs
app.MapGet("/api/home", () =>
{
    return dogs;
});

// list of dogs by cityId
app.MapGet("/api/DogsByCity/{cityId}", (int cityId) =>
{
    List<Dog> foundDogs = dogs.Where(d => d.CityId == cityId).ToList();

    return Results.Ok(foundDogs);
});

// Add a dog
app.MapPost("/api/dogs", (Dog dog) =>
{
    dog.Id = dogs.Count > 0 ? dogs.Max(d => d.Id) + 1 : 1;

    dogs.Add(dog);
    return dog;
});

// add a walker to a dog
app.MapPut("/api/updateDog/{dogId}", (int dogId, Dog dog) =>
{
    Dog dogToUpdate = dogs.FirstOrDefault(d => d.Id == dogId);

    int dogIndex = dogs.IndexOf(dogToUpdate);

    dogs[dogIndex] = dog;

    return Results.Ok();
});
// app.MapPost("/api/dogs/{dogId}", (int dogId, Dog dog) =>
// {
//     Dog dogToUpdate = dogs.FirstOrDefault(d => d.Id == dogId);
//     dogs.Add(dog);
//     return dog;
// });

// single dog details
app.MapGet("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);

    City chosenDogCity = cities.FirstOrDefault(c => c.Id == dog.CityId);
    Walker chosenDogWalker = walkers.FirstOrDefault(w => w.Id == dog.WalkerId);

    dog.City = chosenDogCity;
    dog.Walker = chosenDogWalker;

    return Results.Ok(dog);
});

// delete a dog
app.MapDelete("/api/dogs/{id}", (int id) =>
{
    Dog dog = dogs.FirstOrDefault(d => d.Id == id);
    dogs.Remove(dog);
});

// list of cities
app.MapGet("/api/cities", () =>
{
    return cities;
});

// get a specific city
app.MapGet("/api/cities/{id}", (int id) =>
{
    City chosenCity = cities.FirstOrDefault(c => c.Id == id);
    if (chosenCity == null)
    {
        return Results.NotFound();
    }
    if (id != chosenCity.Id)
    {
        return Results.BadRequest();
    }

    return Results.Ok(chosenCity);
});

// add a city
app.MapPost("/api/cities", (City city) =>
{
    city.Id = cities.Count > 0 ? cities.Max(c => c.Id) + 1 : 1;
    cities.Add(city);
    return city;
});

// list of walkers
app.MapGet("/api/walkers", () =>
{
    return walkers;
});

// get walker city list
app.MapGet("/api/walkerCities/{walkerId}", (int walkerId) =>
{
    List<WalkerCity> foundWalkerCities = walkerCities.Where(wc => wc.WalkerId == walkerId).ToList();

    List<City> foundCities = new List<City>();

    foreach (WalkerCity fwc in foundWalkerCities)
    {
        foundCities.Add(cities.FirstOrDefault(c => c.Id == fwc.CityId));
    }

    return Results.Ok(foundCities);
});

// WalkerCities
app.MapGet("/api/walkercities", () =>
{
    return walkerCities;
});

app.Run();
