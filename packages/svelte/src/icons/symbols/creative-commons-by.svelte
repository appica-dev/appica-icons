<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12\"/><path d=\"M11 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0M9 13v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-.5l-.5 4h-2l-.5-4H10a1 1 0 0 1-1-1\"/>";
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
