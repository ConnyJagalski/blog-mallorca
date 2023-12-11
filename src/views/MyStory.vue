<template>
  <h2>Über mich</h2>
  <main>
    <img src="@/assets/pictures/ich.jpg" alt="Picture of myself" />
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident accusamus at corporis
      magnam sapiente, dolorum vero similique dolorem rerum placeat adipisci blanditiis tempore
      dolore nulla perferendis, suscipit dignissimos voluptate dicta ipsum inventore. Quaerat natus
      mollitia consectetur hic maiores officia fugiat sint odio sapiente quis? Tenetur nisi
      molestiae ab ut repudiandae, harum, a facilis sed alias non consequuntur deserunt perferendis
      modi sint, deleniti molestias corrupti laborum! Voluptatum iste tenetur fuga quia vero,
      obcaecati ipsam quod praesentium sed ab eum maxime dignissimos placeat explicabo deserunt?
      Blanditiis corporis quam odit deleniti natus tempora iusto officia, voluptas ipsum optio nihil
      totam incidunt quaerat numquam expedita, nulla ut, omnis quod tempore vero dolor accusantium
      non repellendus. At a in ut est quibusdam, adipisci et fuga nobis culpa nesciunt, dignissimos
      rerum! Suscipit ipsam vel placeat, saepe minima ab quidem ullam delectus ut quas atque magni
      ratione blanditiis animi, similique rem esse assumenda inventore et labore. Aliquid, incidunt
      suscipit cumque deleniti beatae pariatur perspiciatis eveniet molestias necessitatibus,
      sapiente a temporibus aliquam officiis veniam? In velit dolorem tempore neque ea perferendis
      suscipit quae maiores quas soluta accusantium architecto aut excepturi error, saepe modi
      voluptates ut delectus ipsam id eos corporis commodi reprehenderit culpa! Repellendus
      exercitationem eius alias quos!
    </p>
  </main>
  <hr />
</template>

<script>
export default {
  name: 'MyStory'
}
</script>

<style scoped>
img {
  margin-right: 0.5rem;
  width: 40%;
  float: left;
}

@media screen and (min-width: 900px) {
  main {
    display: flex;
    align-items: center;
  }

  img {
    width: 25%;
  }
}
</style>
