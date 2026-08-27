<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m15 16-1.5-7c.9-.518 1.5-1.887 1.5-3a3 3 0 0 0-6 0c0 1.113.6 2.482 1.5 3L9 16m6 0H9m6 0 2.316.772a1 1 0 0 1 .684.948V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-1.279a1 1 0 0 1 .684-.949L9 16M8 9h8\"/>";
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
