<script lang="ts">
  import Icon from "../../Icon.svelte";

  let props = $props();

  const innerSvg = "<path d=\"M11.047 2.25v9.725a.977.977 0 0 0 .977.977h9.726a9.774 9.774 0 0 1-19.5-.977l.005-.317a9.774 9.774 0 0 1 8.792-9.408m5.865 1.26a9.78 9.78 0 0 1 4.838 7.488h-8.748V2.25a9.8 9.8 0 0 1 3.91 1.26\"/>";
</script>

<Icon
  innerSvg={innerSvg}
  {...props}
/>
