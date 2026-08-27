<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M3 15.961c4-2.118 4-4.118 1-7.118m17 7.118c-4-2.118-4-4.118-1-7.118m-3.118-1.001a4.882 4.882 0 0 0-9.764 0c0 4.273-.213 6.409-4.118 8.118 2 .882 2 .882 3 3 3 0 4 2 6 2s3-2 6-2c1-2.118 1-2.118 3-3-3.906-1.709-4.118-3.845-4.118-8.118\"/>";
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
