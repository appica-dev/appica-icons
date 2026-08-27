<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m13 20 3.505-3.505M13 20H6a2 2 0 0 1-2-2V6c0-.547.218-1.04.573-1.4M13 20v-6c0-.272.109-.519.285-.699m5.22 1.194 1.501-1.501M17 13h3V6a2 2 0 0 0-2-2H8M3 3l18 18\"/>";
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
