<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6m-4 0v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413 1.627 1.627 0 0 0-2.346 0l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346 0 1.74 1.74 0 0 0 0 2.412l2.51 2.59z\"/>";
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
