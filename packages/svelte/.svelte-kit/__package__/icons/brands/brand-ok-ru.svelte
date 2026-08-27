<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.5 13c1.333.667 3.667.667 5 0m-5 4 2.5-3m0 0 2.5 3M12 14v-.5M10 9a2 2 0 1 0 4 0 2 2 0 0 0-4 0m10 3c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8\"/>";
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
