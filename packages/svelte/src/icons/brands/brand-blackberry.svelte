<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M7 6a1 1 0 0 0-1-1H4l-.5 2H6a1 1 0 0 0 1-1m-1 6a1 1 0 0 0-1-1H3l-.5 2H5a1 1 0 0 0 1-1m7 0a1 1 0 0 0-1-1h-2l-.5 2H12a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H13a1 1 0 0 0 1-1m-2 12a1 1 0 0 0-1-1H9l-.5 2H11a1 1 0 0 0 1-1m8-3a1 1 0 0 0-1-1h-2l-.5 2H19a1 1 0 0 0 1-1m1-6a1 1 0 0 0-1-1h-2l-.5 2H20a1 1 0 0 0 1-1\"/>";
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
