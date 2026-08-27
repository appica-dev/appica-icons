<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m8 11-4 2v5l4 2 4-2m-4-7 4 2m-4-2V6l4-2 4 2v5m-4 2v5m0-5 4-2m-4 7 4 2 4-2v-5l-4-2\"/>";
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
