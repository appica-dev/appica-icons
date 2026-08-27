<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"m17 21 4-4m-2-5h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642M16 19a3 3 0 1 0 6 0 3 3 0 0 0-6 0\"/>";
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
