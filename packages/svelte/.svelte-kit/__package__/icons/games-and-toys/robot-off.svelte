<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4 0H8a2 2 0 0 1-2-2V6m6-4v2m-3 8v9m6-6v6M5 16l4-2m0 4h6M14 8v.01M3 3l18 18\"/>";
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
