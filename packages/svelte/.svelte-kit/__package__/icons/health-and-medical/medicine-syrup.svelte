<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 7a3 3 0 0 1 3 3v10a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V10a3 3 0 0 1 3-3m4 0h-4m4 0V4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3m0 7h4m-2-2v4\"/>";
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
