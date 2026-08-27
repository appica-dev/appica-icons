<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14.991 4h-.01m5.007 0h-.01m.01 5h-.01m.01 6h-.01m-15.98 0h-.01m16 5h-.01m-4.987 0h-.01m-5.986 0h-.01m-4.987 0h-.01m7.006-15v5a1 1 0 0 1-1 1H4.999a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h4.997a1 1 0 0 1 .999 1\"/>";
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
