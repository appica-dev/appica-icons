<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m16 3-4 5m4-5H8m8 0a2 2 0 0 1 2 2v2.172a2 2 0 0 0 .586 1.414l.828.828A2 2 0 0 1 20 10.828V19a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2m0-11L8 3m4 5v11M8 3a2 2 0 0 0-2 2v2.172a2 2 0 0 1-.586 1.414l-.828.828A2 2 0 0 0 4 10.828V19a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2m8-6h-3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3M4 17h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H4\"/>";
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
