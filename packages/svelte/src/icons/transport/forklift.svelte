<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0v-6h13m-9 6h5m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m0 0v-6m0 0-3-6H9v6m-4 0V7h4m13 8h-3V5m-3 8h3\"/>";
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
