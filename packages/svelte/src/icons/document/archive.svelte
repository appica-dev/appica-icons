<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19 8a2 2 0 0 0 0-4H5a2 2 0 1 0 0 4m14 0H5m14 0v10a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8m5 4h4\"/>";
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
