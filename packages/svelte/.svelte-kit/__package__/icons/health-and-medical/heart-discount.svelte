<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13.006 18.993-1 .998-7.494-7.418a4.994 4.994 0 0 1 5.963-7.916c.598.342 1.12.805 1.532 1.358a4.995 4.995 0 0 1 7.286-.755 4.995 4.995 0 0 1 1.341 5.622 5 5 0 0 1-1.133 1.697m-3.497 8.411L21 15.996m0 4.994V21m-4.996-5.004v.01\"/>";
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
