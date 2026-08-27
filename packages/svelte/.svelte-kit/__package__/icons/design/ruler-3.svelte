<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 8v2M6 8v3m6-3v3m6-3v3m-3-3v2m4.875-2C20.496 8 21 8.512 21 9.143v5.714c0 .631-.504 1.143-1.125 1.143H4a1 1 0 0 1-1-1V9.143C3 8.512 3.504 8 4.125 8z\"/>";
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
