<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m19.501 12.578-2.998 2.926M11.007 19q-3.246-3.213-6.495-6.423a4.997 4.997 0 1 1 7.495-6.562 4.997 4.997 0 1 1 7.494 6.568M15.004 19 17.003 21 21 17.003\"/>";
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
