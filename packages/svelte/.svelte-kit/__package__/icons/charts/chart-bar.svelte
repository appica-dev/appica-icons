<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 19v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m5-1a1 1 0 0 1-1 1H4m5-1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1m-6 0V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v14M4 20h14m-3-1a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1z\"/>";
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
