<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0m0 0h2m5 0h-2m0 16h-2m-7 0c8 0 10-16 18-16\"/>";
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
