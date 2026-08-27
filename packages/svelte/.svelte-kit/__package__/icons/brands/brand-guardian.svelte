<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M14 12.989h6M13.5 3S4 2.704 4 11.99c0 10.057 9.572 8.989 9.572 8.966C10.763 20.956 9 16.612 9 11.99S10.692 3 13.5 3m0 0h1c1.416 0 3.853 1.159 4.5 1.998v3.496m-4 4.495v7.99m0 0s2.77-.369 4-1.997V12.99m-4 7.99h-1.5\"/>";
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
