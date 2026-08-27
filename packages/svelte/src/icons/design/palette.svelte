<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M12 20.995a9 9 0 0 1-9-8.998A8.996 8.996 0 0 1 12 3c4.97 0 9 3.58 9 7.998 0 1.06-.474 2.077-1.318 2.827s-1.989 1.171-3.182 1.171H14a2 2 0 0 0-1 3.75 1.299 1.299 0 0 1-1 2.249M7.5 10.498a1 1 0 1 0 1.999 0 1 1 0 0 0-1.999 0m4-3a1 1 0 1 0 2 0 1 1 0 0 0-2 0m4 3a1 1 0 1 0 1.999 0 1 1 0 0 0-1.999 0\"/>";
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
