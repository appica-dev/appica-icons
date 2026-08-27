<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M9.017 6.159c1.977-1.386 8.9-2.6 9.889 0 1.48 3.89-15.029 6.222-13.845 0C5.555 3.558 10.5 2 12.973 2M18 11.193c-2.577 1.878-9.423 2.631-12 .589m8.022 9.912c-.978.188-2.014.295-3.022.306m4-6.719c-2.617.676-5.923.763-8-.115m5.999 3.497c-1.712.222-3.506.197-4.96-.16\"/>";
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
