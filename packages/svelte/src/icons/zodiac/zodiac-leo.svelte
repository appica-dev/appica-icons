<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M21 17a4 4 0 1 1-8 0c0-4 2-6 2-10m-6 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0c0-4-2-6-2-9m0 0a4 4 0 0 0 8 0M7 7a4 4 0 0 1 8 0\"/>";
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
