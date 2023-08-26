namespace DeshawnsAPI.Models;

public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }
}
namespace DeshawnsAPI.Models;

public class Walker
{
    public int Id { get; set; }
    public string Name { get; set; }
    public int DogId { get; set; }
    public Dog Dog { get; set; }
}