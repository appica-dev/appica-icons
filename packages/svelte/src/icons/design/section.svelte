<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M19.99 20H20M4 20h.01m3.988 0h.01m3.987 0h.01m3.987 0h.01M19.99 4H20M4 4h.01m3.988 0h.01m3.987 0h.01m3.987 0v.01M4 9a1 1 0 0 1 1-1h13.99a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z\"/>";
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
