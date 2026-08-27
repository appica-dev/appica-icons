<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M5 5h14M6 5c.32 6.744 2.74 9.246 6 10m0 0c3.26-.754 5.68-3.256 6-10m-6 10c-1.448-2.918-2-5.085-2-10m2 10c1.448-2.918 2-5.085 2-10m-2 10v6m0-18v2M7 16c.64.64 1.509 1 2.414 1h5.172c.905 0 1.774-.36 2.414-1m-6 5h2\"/>";
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
