<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 11-4 2v5l4 2 4-2m-4-7 4 2m-4-2V8m4 5v5m0-5 .661-.331M12 18l4 2 2.666-1.333M9.332 5.334 12 4l4 2v5m0 0-.655.328M16 11l4 2v3M3 3l18 18\"/>";
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
