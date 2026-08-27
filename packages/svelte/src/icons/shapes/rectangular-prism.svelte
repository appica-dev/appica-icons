<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9 21c-.35 0-.695-.092-1-.266l-4-2.008a1.98 1.98 0 0 1-1-1.717v-5.018c0-.708.381-1.363 1-1.718l10-5.008a2.02 2.02 0 0 1 2 0l4 2.008a1.98 1.98 0 0 1 1 1.717v5.018c0 .708-.381 1.363-1 1.718l-10 5.008c-.305.174-.65.265-1 .265m0 0v-7.5m0 0L20.5 8M9 13.5 3.5 11\"/>";
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
