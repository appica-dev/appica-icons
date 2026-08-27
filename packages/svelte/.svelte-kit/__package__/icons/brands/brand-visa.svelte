<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21 15-1-6-2.5 6M9 15l1-6M3 9h1v6h.5L7 9m9 .5a.5.5 0 0 0-.5-.5h-.75c-.721 0-1.337.521-1.455 1.233l-.09.534A1.058 1.058 0 0 0 14.25 12a1.06 1.06 0 0 1 1.045 1.233l-.09.534A1.476 1.476 0 0 1 13.75 15H13a.5.5 0 0 1-.5-.5M18 14h2.7\"/>";
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
