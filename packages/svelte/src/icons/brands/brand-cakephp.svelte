<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M2 10V7.2C2 5.435 6.476 4 11.998 4 17.521 4 22 5.435 22 7.2V11c0 .752-.639 1.455-2 2l-8-2v3M2 10c0 1.766 4.478 4 10 4M2 10v4m10 0v3m0-3 8 2c1.362-.547 2-1.246 2-2m-10 3 8 2c1.362-.547 2-1.246 2-2v-3m-10 3-.002 3C6.476 20 2 18.766 2 17v-3.5C2 15.266 6.478 17 12 17m10-3v-4\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  fill={"none"}
  stroke={"currentColor"}
  stroke-width={"1.5"}
  stroke-linecap={"round"}
  stroke-linejoin={"round"}
  {...props}
/>
