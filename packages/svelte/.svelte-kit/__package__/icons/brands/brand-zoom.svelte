<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M17.011 9.385v5.128L21 18V6zM3.887 6h10.08C15.435 6 17 7.203 17 8.803v8.196a.99.99 0 0 1-.975 1H5.652c-1.667 0-2.652-1.5-2.652-3l.01-8a.88.88 0 0 1 .208-.71.84.84 0 0 1 .67-.287z\"/>";
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
