<template>

<div class="container bg-red w-auto max-h-full self-center">
    <div class="flex-auto grid grid-cols-3 grid-rows-1 items-center">
<img class="py-6 pl-6" alt="bobby firmino smiling" src='../assets/bobbysmile.gif'/>
<div>
<h1 class="text-center font-bold">Best in the World, Bobby Firmino</h1>
        <p class="text-center font-semibold text-white pl-4 pt-4 whitespace-pre-wrap break-normal leading-relaxed w-auto">
          There's something that the Kop wants you to know,
          <br>
          The best in the world his name is Bobby Firmino.
          <br>
          Our number nine,
          Give the ball to him and he'll score everytime.
          <br>
          Sim señhor,
          Give the ball to Bobby and he will score.
        </p>

</div>
<PremTable/>
</div>
</div>
</template>

<script>
import PremTable from './PremTable.vue'

export default {
    components: {
         PremTable
}
}
</script>