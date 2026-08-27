<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 17a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0m-4 0H4a1 1 0 0 1-1-1v-6a3 3 0 0 1 3-3h11.146a3 3 0 0 1 2.683 1.658l.96 1.92a2 2 0 0 1 .211.894V16a1 1 0 0 1-1 1h-1M9 17h6m0 0a2 2 0 0 0 4 0m-4 0a2 2 0 0 1 4 0M3 12h18m-6 0V7M6 5.5A1.5 1.5 0 0 1 7.5 4h7a1.5 1.5 0 0 1 0 3h-7A1.5 1.5 0 0 1 6 5.5\"/>";
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
