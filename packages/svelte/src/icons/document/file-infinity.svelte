<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M15.536 17.586a2.123 2.123 0 0 0-2.929 0 1.95 1.95 0 0 0 0 2.828c.809.781 2.12.781 2.929 0m0 0c-.805.778.809-.781 0 0m0 0 1.46-1.41 1.46-1.419m-2.916-.003 1.46 1.42 1.46 1.41m0 0c-.805-.779.809.78 0 0m0 0c.805.779 2.12.781 2.929 0a1.95 1.95 0 0 0 0-2.828 2.123 2.123 0 0 0-2.929 0M14 3v4a1 1 0 0 0 1 1h4m-5-5H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2.5M14 3l5 5m0 0v6\"/>";
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
