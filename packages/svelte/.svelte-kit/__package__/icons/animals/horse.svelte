<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m19 9 .864 9.506A1.37 1.37 0 0 1 18.5 20h-.146a2 2 0 0 1-1.857-1.257l-.994-2.486A2 2 0 0 0 13.646 15h-1.292a2 2 0 0 0-1.857 1.257l-.994 2.486A2 2 0 0 1 7.646 20H7.5a1.356 1.356 0 0 1-1.35-1.493L7 10l-3 2-2-2 3-6c3 0 6 2 6 5zm0 0a3 3 0 0 1 3 3v2\"/>";
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
