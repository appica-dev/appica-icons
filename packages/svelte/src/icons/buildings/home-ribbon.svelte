<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5m-3 0v-6a2 2 0 0 1 2-2h1.5m3.5 2h5v7l-2.5-1.5L16 22z\"/>";
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
