<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M8 4h10a2 2 0 0 1 2 2v10m-.592 3.42c-.362.359-.859.58-1.408.58H6a2 2 0 0 1-2-2V6c0-.539.213-1.028.56-1.388M8 20V8H4m12-4v8h4m-4 4v4M4 16h4m-4-4h8m4-4h4M3 3l18 18\"/>";
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
