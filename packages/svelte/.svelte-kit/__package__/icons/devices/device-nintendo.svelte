<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z\"/><path d=\"M16.5 15.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 8.5a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
