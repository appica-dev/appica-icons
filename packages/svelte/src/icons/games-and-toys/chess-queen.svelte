<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 16 2-11-4 4-2-5-2 5-4-4 2 11m8 0 1.447.724a1 1 0 0 1 .553.894V20H6v-2.382a1 1 0 0 1 .553-.894L8 16m8 0H8m3-12a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0m12 0a1 1 0 1 0 2 0 1 1 0 0 0-2 0\"/>";
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
